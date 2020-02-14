import {createMuiTheme} from '@material-ui/core/styles';

var theme_type = window.localStorage.getItem('theme_type');
if(theme_type == null ){
    theme_type = 'light';
}

export default createMuiTheme({
    palette:{
        type: theme_type,
        primary: {
            main: '#1a1f48',
            dark: '#1a1f48',
        }
    }
});