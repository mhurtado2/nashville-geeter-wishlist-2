export const GearSearch = ({ setterFunction}) => {
    return (
        <div>
            <input 
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            className="searched" type="text" placeholder="Enter search terms" />
        </div>
    )
}