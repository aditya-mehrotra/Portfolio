export interface LINK_INTERFACE{
    title: string;
    Url: string;
    Color?: string;
}
export interface NAVBAR_ITEMS{
    Brand: LINK_INTERFACE;
    Items?: LINK_INTERFACE[];
    EndLink?: LINK_INTERFACE;
}
export interface EXPERIENCE_INTERFACE{
    Company: string;
    Position: string;
    Summary: string;
    TechStack?: string[];
    Languages?: string[];
    Duration: string;
    Url?: string;
}
export interface PROJECT_INTERFACE{
    Title: string;
    Url: string;
    Track: string;
    Summary: string;
    TechStack: string[];
}