import './App.sass'
import { testimonials } from './data'
import Card from './components/card/Card'

const App = () => {
    return(
        <div className="app">
            {
                testimonials.map((testimonial, key) => {
                    return (
                        <Card
                            key={ key }
                            name={ testimonial.name }
                            img={ testimonial.img }
                            status={ testimonial.status }
                            title={ testimonial.title }
                            description={ testimonial.description }
                        />
                    )
                })
            }
        </div>
    )
}

export default App
