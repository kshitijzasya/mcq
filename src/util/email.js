const url = 'https://api.emailjs.com/api/v1.0/email/send';

const credentials = {
    service_id: process.env.NEXT_EMAIL_SERVICE_ID ?? "service_23o4ao8",
    template_id: "template_ibowozo" ?? "",
    user_id: process.env.NEXT_EMAIL_PUBLIC_KEY ?? "1Y30KNVGGMdPFOheJ",
    accessToken: process.env.NEXT_EMAIL_PRIVATE_KEY ?? "F6sKRI8SgLHos0SJnVscb"
}

const buildStringPayload = function(payload) {
    return JSON.stringify({
        ...credentials,
        template_params: payload
    })
}

const EmailApiInterface = (function() {
    return {
        GET: function() {

        },
        POST: async function(payload) {
            try {
                const response =  await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: buildStringPayload(payload)
                })
                
                if (response.status === 200) {
                    return true
                }
            } catch (error) {
                console.log('error', error)
            }
        }
    }
})()

export default EmailApiInterface;