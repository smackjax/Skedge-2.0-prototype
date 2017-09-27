import React from 'react';

export default class NewMember extends React.Component{
        // props.confirm()
        // props.cancel()
        // props.color
        // props.faClass
        // props.placeholderTxt

        state={
            name: ''
        }
        handleName(e){
            this.setState({name: e.target.value});
        }
        confirm(){
            this.props.confirm(this.state.name);
        }
        render(){
        const mainColor = this.props.color;
        const faClass = 'fa fa-' + this.props.faClass;
        return (
        <div className="new-item-page">
            <div style={{backgroundColor: mainColor, color: '#efefef'}} className="new-item-header">
                <i className="fa fa-plus"></i>&nbsp;
                <i className={faClass}></i>
            </div>

            <div className="container">
                <div className="form-group row">
                    <label htmlFor="new-item-name" className="col-2 col-form-label">Name: </label>
                    <div className="col-10">
                        <input 
                        onChange={this.handleName.bind(this)}
                        className="form-control" 
                        type="text" value={this.state.name} 
                        placeholder={this.props.placeholderTxt}
                        id="new-item-name"/>
                    </div>
                </div>                 
                <div className="row">
                    <button onClick={this.props.cancel} 
                    className="btn btn-danger col-5">
                        <i className="fa fa-times"></i>
                    </button>
                    <button 
                    disabled={this.state.name === ''}
                    style={{backgroundColor: mainColor, color: '#efefef'}} 
                    onClick={this.confirm.bind(this)} 
                    className="btn offset-1 col-6">
                        <i className="fa fa-check"></i> <i className={faClass}></i>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}