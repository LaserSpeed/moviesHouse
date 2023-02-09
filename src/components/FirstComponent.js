function FirstComponent() {
    const name = 'Nitish';
    return (
        <>
        {
            name ? (
                <>
                    <h1>Welcome</h1>
                    <h2>Hello, {name}</h2>
                </>
            ) : (
                <>
                    <h1>Welcome, someone</h1>                
                </>
            )
        }
        </>
    )
}   
export default FirstComponent;