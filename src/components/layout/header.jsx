import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchField: ""
		}
	}

	handleSearch(event) {
		const searchTarget = event.target.value;
		this.setState({ searchField: searchTarget });
	}

	render() {
		return (
			<nav className="navbar navbar-dark bg-secondary">
				<div className="navbar-brand">
						NausicaaIQ
				</div>
				<form className="form-inline">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">
								<i className="fas fa-search"></i>
							</span>
						</div>
						<input 
							type="text" 
							className="form-control" 
							placeholder="Search" 
							value={this.state.searchField} 
							aria-describedby="basic-addon1"
							onChange={event => this.handleSearch(event)} />
					</div>
				</form>
			</nav>
		)
	}
}