import "./env";
import axios from "axios";

/*
const client :any = new twilio(
    process.env.TWILIO_SID,
    process.env.TWILIO_AUTH_TOKEN
);
 // twilio측 ts 문제로 사용불가 axios로 대체
*/

const api = axios.create({
    baseURL: `https://api.twilio.com/2010-04-01/Accounts/${
        process.env.TWILIO_SID
    }`,
    auth: {
        username: process.env.TWILIO_SID || "",
        password: process.env.TWILIO_AUTH_TOKEN || ""
    }
});

const getUs = async () => {
    try {
        // const data = await api.get("AvailablePhoneNumbers/US/Local.json"); 
        // long long
        const { data } = await api.get("AvailablePhoneNumbers/US/Local.json"); 
        // 구조 분해
        console.log(data);
    } catch (e) {
        console.log(e.message);
    }
};

getUs();
