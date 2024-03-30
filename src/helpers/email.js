import EmailApiInterface from "@/util/email"

function sendEmail(type, info) {
    type =  typeof type === "string" ? type.toUpperCase() : type;
    let payload = {
        from_name: info.fullname ?? "",
        from_email: info.email ?? "",
        message: info.message ?? "",
        score: info.score ?? "",
        total: info.total ?? ""
    }
    return EmailApiInterface[type](payload);
}

export default sendEmail;