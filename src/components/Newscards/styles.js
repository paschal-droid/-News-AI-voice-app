import {makeStyles} from "@material-ui/styles";

const styles = makeStyles({
    container: {
        padding: "0 5%",
        width: "100%",
        margin: "0",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "70vh",
        padding: "10%",
        borderRadius: 10,
        color: "white",
    },
    infoCard: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "5%",
    }

})

export default styles