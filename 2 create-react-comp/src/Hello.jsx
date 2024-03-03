function Hello() {

    let myName = 'Tarun';
    let number = 456;
    let fullName = () => {
        return 'Tarun Joshi';
    }

    return <h3>
        Hello this is the future speaking
        I am your master {fullName()}
    </h3>
}

export default Hello;