
export class phone{
    _id?:string;
    phone_name:string;
    company_name:string;
    img:string;
    // details:string;
    price_num:Number;
    price_str:string;
}
export class details{
    _id?:string;
    phone_name:string;
    company_name:string;
    img:string;
    // details:string;
    price_num:Number;
    price_str:string;
    details:string;
    desktop: string;
    cpu: string;
    ram: string;
    card: string;
    hdh: string;
    weight: string;
}
export class CART{
    _id?:string;
    phone_name:string;
    img:string;
    price_num:Number;
    amount: Number;
}
export class laptop{
    _id?:string;
    phone_name:string;
    company_name:string;
    img:string;
    // details:string;
    price_num:Number;
    price_str:string;
    // desktop: string;
    // cpu: string;
    // ram: string;
    // card: string;
    // hdh: string;
    // weight: string;
}
export class table{
    _id?:string;
    phone_name:string;
    company_name:string;
    img:string;
    // details:string;
    price_num:Number;
    price_str:string;
}
export class user{
    _id?:string;
    email:string;
    username:string;
    password:string;
    reapeatPassword: string;
    adddress: string
}

export const URL = "http://localhost:4000";
// export const URL_laptop = "http://localhost:4000/laptops";
// export const URL_user = "http://localhost:4000/users";
// export const URL_table = "http://localhost:4000/tables"

export const URL_IMG = "../../assets/image";