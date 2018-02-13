import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const mandrill = require ("mandrill-api/mandrill");

const emailClient = new mandrill.Mandrill(functions.config().mandrill.key);
const email = functions.config().mandrill.email;

export const sendMessage = functions.database
    .ref('contact/{messageId}')
    .onWrite(async (event:any) => {
        const messageId = event.params.messageId;
        const data = event.data.val();
        console.log('messageId ' + messageId);
        console.log('data ' + JSON.stringify(data));
        if (!data) return;

        var email:any = {
            to: [{
                email: email
            }],
            merge_language: 'handlebars',
            'global_merge_vars': [{
                name: 'data',
                content: data
            }]
        };

        emailClient.messages.sendTemplate({
            template_name: 'contactTemplete',
            template_content: {},
                message: email,
                async: false
        }, (result:any) => {
            console.log(result[0])
            if (result[0].status === 'sent' || result[0].status === 'queued') {
                admin.database().ref(`contact/${messageId}`).remove((error) => {
                    if (error) console.log(error);
                    return;
                });
            }
        });

    });