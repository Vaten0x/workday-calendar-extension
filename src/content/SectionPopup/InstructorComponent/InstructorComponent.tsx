import { ISectionData } from "../../App/App.types";
import "./InstructorComponent.css";

interface IProps {
  selectedSection: ISectionData;
}

const InstructorComponent = ({
  selectedSection,
}: IProps) => {
    return (
        <div className="InstructorComponentContainer">
            <div className="InstructorContainerTitle">Instructors:</div>
            <div>
                {selectedSection?.instructors?.length > 0 ? (
                    <ul>
                        {selectedSection.instructors.map((instructor, index) => (
                            <li key={index}>{instructor}</li>
                        ))}
                    </ul>
                ) : (
                    <div>Unavailable</div>
                )}
            </div>
        </div>
    )
};

export default InstructorComponent;
