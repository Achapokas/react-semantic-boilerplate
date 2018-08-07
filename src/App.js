import React from 'react';
import { Button, Container, Divider, Icon } from 'semantic-ui-react'


const App = () => {
	return (
		<div className="App">
			<Container text>
				<Divider horizontal>
					Hello world
				</Divider>
				<Button icon labelPosition='left'>
					<Icon name='right arrow' />
					TEST
				</Button>	
			</Container>
		</div>
	)
}

export default App
