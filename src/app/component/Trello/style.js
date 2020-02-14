import { createStyles} from '@material-ui/core/styles';

export const useStyles =  function(theme){

    return createStyles({
      root: {
        width: '100%',
        padding: '15px 0 15px 0',
        overflow: 'hidden',
        fontSize: '24px',
      },
      
      footeritem: {
        bottom: '0',
        left: '0',
        right: '0',
        position: 'fixed',
        textAlign: 'center',
        backgroundColor: 'white',
      },
      
    });
};


