import { useState } from "react";
import RadioGroup from "../../components/composition/radiogroup/RadioGroup";
import RadioOption from "../../components/composition/radiogroup/RadioOption";

const TodoForm = (props) => {

    const {addTodo, selectedMode, handleModeChange} = props;

    const id = Math.floor(Math.random() * 100) + 1;
    const initialData = { id, task: "", dueDate: "" };
    const [formData, setFormData] = useState(initialData);

    const handleFieldChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        resetFormData();
    };

    const resetFormData = () => {
        setFormData(initialData);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            
            <input required={true} name="task" type="hidden" value={formData.id} />

            <div className="form-field-row">
                <RadioGroup selected={selectedMode} onChange={handleModeChange}>
                    <RadioOption value="strike" label="Strike completed"/>
                    <RadioOption value="delete" label="Delete completed"/>
                </RadioGroup>
            </div>

            <div className="form-field-row">
                <div className="form-field">
                    <label><input required={true} placeholder="Task" name="task" type="text" value={formData.task} onChange={handleFieldChange} /></label>
                </div>
                <div className="form-field">
                    <label><input required={true} placeholder="Due Date" name="dueDate" type="text" value={formData.dueDate} onChange={handleFieldChange} /></label>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
        </form>
    );
}

export default TodoForm;