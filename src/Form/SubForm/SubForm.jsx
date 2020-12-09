import React from 'react'
import styles from "../SubscribeForm/SubcribeForm.module.css";

const SubForm = () => {

    return(

        <div>

            <form>
                <fieldset>
                    <legend><h2>Subscribe Form</h2></legend>
                    <div>
                        <label htmlFor="first-name">
                            First name<sup>*</sup>:
                            <input
                                className={styles.name}
                                type="text"
                                id="first-name"
                                name="first-name"
                                // onChange={(e)=>{setFirstName(e.target.value)}}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="last-name">
                            Last name<sup>*</sup>:
                            <input
                                className={styles.name}
                                type="text"
                                id="last-name"
                                name="last-name"
                                // onChange={(e)=>{setLastName(e.target.value)}}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email<sup>*</sup>:
                            <input
                                className={styles.email}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ex: myname@example.com"
                                // onChange={(e)=>{setEmail(e.target.value)}}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="telephone">
                            Telephone:
                            <input
                                className={styles.phone}
                                type="tel"
                                id="telephone"
                                name="telephone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="(xxx) xxx xxxx"
                                // onChange={(e)=>{setTelephone(e.target.value)}}
                            />
                            {/*<small>format: 123-456-7890</small>*/}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="education">
                            Period:
                            <select id="education" >
                                <option>please select one</option>
                                <option value="A Week">A Week</option>
                                <option value="A Month">A Month</option>
                                <option value="A Month">Three Months</option>
                                <option value="Six Months">Six Months</option>
                                <option value="A Year">A Year</option>
                            </select>
                        </label>
                        <label htmlFor="college">
                            School/College:
                            <input
                                className={styles.college}
                                type="text"
                                id="college"
                                name="tcollege"
                                // onChange={(e)=>{setSchool(e.target.value)}}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Type:</label>
                        <input className={styles.certificate} type="radio" value="Premium" name="Premium" /><label>Premium</label>
                        <input className={styles.certificate} type="radio" value="Premium" name="Premium" /><label>Premium</label>
                    </div>
                    <div>
                        <input className={styles.registerButton} type="submit" value="Register" />
                        <button className={styles.cancelButton}>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>

    );

}

export default SubForm;