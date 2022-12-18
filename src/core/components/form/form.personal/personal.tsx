export function Personal() {
    return (
        <>
            <div>
                <label htmlFor="userName">Name</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Introduce your name"
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Introduce your last name"
                    required
                />
            </div>
            <div>
                <label htmlFor="BirthDate">BirthDate</label>
                <input
                    type="date"
                    name="BirthDate"
                    id="BirthDate"
                    placeholder="Introduce your birthdate"
                    required
                />
                <div>
                    <p>
                        Age: <span>38</span> years old
                    </p>
                </div>
            </div>
            <div>
                <p>Gender</p>
                <div>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="female" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="male" />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Introduce your email"
                    required
                />
            </div>
            <div>
                <input type="checkbox" />
                <label htmlFor="checkNewsletter">
                    Do you want to receive information from our newsletter?
                </label>
            </div>
            <div>
                <button type="submit">Guardar</button>
            </div>
        </>
    );
}
