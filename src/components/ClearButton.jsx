export const ClearButton = ({handleClearAllBtn}) => {
    return (
        <>
            <div className="clearAllSection">
                <button className="clear" onClick={handleClearAllBtn}>Clear All</button>
            </div>
        </>
    )
}