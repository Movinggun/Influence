
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title, onAdd, status }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
           { !status ? <Button color='green' text='Add' onClick={onAdd} /> : <Button color='red' text='Close' onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header
