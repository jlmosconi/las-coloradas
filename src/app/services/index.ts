import { AboutService } from "./about/service";
import { AuthService } from "./auth/service";
import { BrandsService } from "./brands/service";
import { ContactService } from "./contact/service";
import { ProductsService } from "./products/service";
import { LocalStorageService } from "./localStorage/service";
import { UserService } from "./user/service";

export const services = [
    AboutService,
    AuthService,
    BrandsService,
    ContactService,
    LocalStorageService,
    ProductsService,
    UserService
];
