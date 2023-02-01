const Student = ({
    firstName, lastName, batchNumber, likesIceCream
}) => {
    return (
        <h1>
            My name is {firstName} {lastName}. I'm from batch {batchNumber}. {likesIceCream && 'I like ice cream.'}
        </h1>
    )
}
export default Student