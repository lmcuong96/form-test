import { useState } from "react";
export const UsernameComp = () => {
    const [username, setUsername] = useState("");

    return {
        render: () => (
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
        ),
        invalid: !username,
        explain: () => <p>Tên của bạn là "{username}"</p>,
        addData: (ret) => ({ ...ret, username }),
        showErrors: () => alert("Go username vao di may"),
    };
};
