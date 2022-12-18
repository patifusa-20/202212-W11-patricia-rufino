export function Access() {
    return (
        <>
            <div>
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Introduce your username"
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Introduce your password"
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Repeat password</label>
                <input
                    type="password"
                    name="repeat-password"
                    id="repeat-password"
                    placeholder="Introduce your password again"
                    required
                />
            </div>
            <div>
                <label htmlFor="account-type">Account type</label>
                <select name="account-type" id="type-select">
                    <option value="">--Please choose an option--</option>
                    <option value="personal">Personal</option>
                    <option value="pro">Pro</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div>
                <button type="submit">Guardar</button>
            </div>
        </>
    );
}
