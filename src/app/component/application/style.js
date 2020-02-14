import { createStyles} from '@material-ui/core/styles';
export const useStyles =  function(theme){
            const {palette,breakpoints}     =   theme;
            return createStyles({
                "@global":{
                    "html,body,#root":{
                        margin:0, 
                        height:'100%' 
                    }
                },
                root: {
                    display: 'flex',
                    [breakpoints.down("xs")]:{
                        display:"block"
                    }
                },
                content: {
                    flexGrow: 1,
                    paddingLeft: 0,
                    paddingRight: 0,

                },
                toolbar: theme.mixins.toolbar,
                footer:{
                    border:"1px solid rgba(0,0,0,0.12)",
                    flex: 1,
                    position: 'fixed',
                    width:"83%",
                    height:"20px",
                    bottom:0,
                    top:"auto",
                    background:"#fff",
                    color:palette.primary.main,
                    [breakpoints.down("md")]:{
                        display:"none"
                    }
                }
            })
}


