import  {makeStyles} from "@material-ui/styles";

const styles = makeStyles({
    

    media: {
        paddingTop: "67.65%",
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
      },
      activeCard: {
        borderBottom: '10px solid black',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },   

});

export default styles;