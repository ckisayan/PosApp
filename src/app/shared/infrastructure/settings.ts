
export class Security {
    userSession: string;
}

export class AppSettings {
    serviceConfig: ServiceConfig;
    security: Security;
}

export class ServiceConfig {
    appUrl:string;
}