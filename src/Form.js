import React, {Component} from 'react'

class Form extends Component{
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
    
        this.setState({
            [name]: value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const{name, job} = this.state;

        return(
            <div className=''>
                <h4> Kindly enter the new Name and Job </h4>
                <br/>
                <form>
                    <label htmlFor='name' className='mr-4'><b>Name</b></label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor='job' className='mr-5'><b> Job</b></label>
                    <input
                        type='text'
                        name='job'
                        id='job'
                        className='mb-4'
                        value={job}
                        onChange={this.handleChange}/>
                    <br/>
                    <input
                        type='button'
                        className='btn btn-success btn-large'
                        value='Submit'
                        onClick={this.submitForm}/>          
                </form>
            </div>
        )
    }

}

export default Form;

