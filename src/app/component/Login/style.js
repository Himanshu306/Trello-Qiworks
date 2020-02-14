import { createStyles} from '@material-ui/core/styles';


export const useStyles =  function(theme){

    const {palette,breakpoints}     =   theme;

    return createStyles({
        body:{
            margin: "0"
        },
        container:{
            // backgroundImage: `url(${Image})`,
            backgroundColor:"#1a1f48;",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: 'bottom',
            height: "100%",
            alignItems: "center",
            padding: "10%",
            marginTop: "0",
            [breakpoints.between('sm','md')]: {
                // backgroundImage: `url(${Image})`,
                backgroundColor:"#1a1f48;",
                backgroundSize: "200%",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 'bottom',
                backgroundPositionX: "21%",
            },
            [breakpoints.down('xs')]: {
                backgroundImage: "none",
                backgroundColor:"none",
                padding: "0",
                overflow: "hidden",
                height: "100%"
            }
        },
        card: {
            width: "40%",
            margin: "auto",
            position: "relative",
            textAlign: "center",
            top: "25%",
            padding: "10px",
            Color: palette.primary.main,
            [breakpoints.between('sm','md')]: {
                width: "60%",
                marginTop: "30%",
                marginBottom: "47%"
            },
            [breakpoints.down('xs')]: {
                position: "absolute",
                minHeight: '100%',
                left: 0,
                right:0,
                top:0,
                width: "100%",
                padding: "0",
                borderRadius: "0",
                overflow: "hidden",
            }
        },
        background: {
            left: 0,
            right: 0,
            bottom:0,
            position: "relative",
            [breakpoints.up('sm')]: {
              display: "none",  
            },
        },
        backgroundImg:{
            width: "100%",
        },
        logo: {
            width: "60%",
            [breakpoints.down('xs')]: {
                marginTop: "10%",
 
             }
        },
        title: {
            padding: "0",
        },
        titleText :{
            color: palette.primary.main,
            fontWeight: "600",
            fontSize: "30px"
        },
        formContainer: {
            paddingTop: "10px",
            [breakpoints.down('xs')]: {
                marginTop: "5%",
 
             }
        },
        email: {
            width: "100%",
        },
        password: {
            width: "100%",
        },
        button: {
            marginTop: "40px",
            width: "100%",
            backgroundColor: "#1a1f48",
            color: "#fff",
            cursor: "pointer"
        },
        forgotPass:{
            marginTop: "5px",
            fontSize: "12px",
            textAlign:"right",
            cursor: "pointer",
        },

        registerPage:{
            display: "inline-flex",
            marginTop: "15px",
            [breakpoints.down('xs')]: {
                marginTop: "20px"
            }
        },
        noAccount: {
            fontSize: "12px",
            
        },
        registerLink: {
            fontSize: "12px",
            fontWeight: "bold",
        },
        error:{
            float:"right",
            color:"red"

        }
        
        
    
    });
};


