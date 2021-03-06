import {Box} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import { addTerm, getTerms } from '../../actions/searchActions'

const LandingTextField = ({ label, onChange, value, addTerm, search, getTerms}) => {

    let term = search.searchText;
    const onClick = () => {
        addTerm({term});
        getTerms();
    }

    return (
        <FormControl>
        <Input 
            onChange={onChange}
            placeholder={label}
            value={value}
            style={{width: '450px' , margin: 0, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 5}}
            startAdornment={
                <InputAdornment position="start">
                    <Box m={1}>
                        <img src="/icons/icon-search.svg" alt="Novo Search Icon"/>
                    </Box>
                </InputAdornment>
            }
            endAdornment ={
                <Button 
                    variant={"contained"} 
                    style={{background: 'linear-gradient(to right, #F9E9AD , #FACD7F)', borderRadius: '0px 5px 5px 0px', paddingLeft: 45, paddingRight: 45, marginLeft: 10}}
                    onClick={onClick}
                    >
                    Search
                </Button>
            }
        />
    </FormControl>
    )
}

const mapStateToProps = (state) => ({
    search: state.search 
});

export default connect(mapStateToProps, {addTerm, getTerms}) (LandingTextField)
