import { useState } from "react"
import { useDispatch } from "react-redux";
import { actions } from "../features/profile";


const Profile = () => {
    const [alias, setAlias] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(actions.changeAlias(alias));
        dispatch(actions.changeName(name));
    }

    const handleReset = () => {
        dispatch(actions.resetProfile());
        setAlias('');
        setName('');
    }

    return (
        <div>
            <h3>
                Profile
            </h3>
            <div>
                Alias:
                <input type="text" value={alias} onChange={
                    e => setAlias(e.target.value)}/>
            </div>
            <div>
                Name:
                <input type="text" value={name} onChange={
                    e => setName(e.target.value)} />
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Profile;