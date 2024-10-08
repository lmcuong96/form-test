import { useState } from "react";
export const RecivedEmailComp = () => {
    const [receivedEmail, setReceivedEmail] = useState(true);

    return {
        render: () => (
            <div>
                <label>Receive marketing emails</label>
                <input
                    type="checkbox"
                    checked={receivedEmail}
                    onChange={(e) => {
                        setReceivedEmail(e.target.checked);
                    }}
                />
            </div>
        ),
        // invalid: !receivedEmail,
        explain: () => <p>Xác nhận nhận thông báo "{receivedEmail}"</p>,
        addData: (ret) => ({ ...ret, receivedEmail }),
        // showErrors: () => alert("Khong muon nhan email?"),
    };
};
