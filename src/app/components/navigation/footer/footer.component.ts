import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	template:
		`
		<!--<div class="footer">
			<div class="container">
				<p class="copyright">
					© {{ currentYear }} Las Coloradas. All Rights Reserved.
				</p>
			</div>
		</div>-->


		<footer>
			<div class="container">
				<div class="row">
					<div class="col-md-4 mb-3 mb-md-0">
						<h3>Aremría Las Coloradas</h3>
						<ul>
							<li>
								Calle 43 entre 3 Y 4 N°433 La Plata, Buenos Aires
							</li>
							<li>
								Lunes - Viernes: 9:00 a 12:00
							</li>
							<li>
								Sabados: 9:00 a 13:00
							</li>
						</ul>
					</div>
					<div class="col-md-2 mb-3 mb-md-0">
						<h3>Sobre nosotros</h3>
						<ul>
							<li><a>Quienes somos</a></li>
							<li><a>Contacto</a></li>
						</ul>
					</div>

					<div class="col-md-2 mb-3 mb-md-0">
						<h3>Seguinos</h3>
						<ul>
							<li><a>Facebook</a></li>
						</ul>
					</div>
					<div class="col-md-2 mb-3 mb-md-0">
						<h3>Comunicate</h3>
						<ul>
							<li>
								0810 2229873
							</li>
							<li>
								0221 482-2340
							</li>
						</ul>
					</div>

					<!--<div class="col-md-2 mb-3 mb-md-0">
						<h3>Información legal</h3>
						<ul>
							
						</ul>
					</div>-->
				</div>
			</div>
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="text-center">
							Copyright © {{ currentYear }} <span>Las Coloradas</span>. All Rights Reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
		`,
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
	currentYear;
	constructor() {
		this.currentYear = (new Date()).getFullYear();
	 }

	ngOnInit() { }
}