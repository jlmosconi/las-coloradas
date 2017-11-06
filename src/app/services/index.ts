import { AboutService } from "./about/service";
import { AuthService } from "./auth/service";
import { ContactService } from "./contact/service";
import { ProductsService } from "./products/service";
import { LocalStorageService } from "./localStorage/service";
import { UserService } from "./user/service";

export const services = [
    AboutService,
    AuthService,
    ContactService,
    LocalStorageService,
    ProductsService,
    UserService
];
