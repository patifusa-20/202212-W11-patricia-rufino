export function Login() {
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
                <button type="submit">Login</button>
            </div>
        </>
    );
}
