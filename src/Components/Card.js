// import '/home/ismayil/ismayildemo/special-octo-guacamole/src/css/styles.css';
import React, {
    Component
} from 'react'

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    render() {
        return (

            <div className="flex lg:w-1/2 sm:w-full" >
                <div className="flex lg:w-full sm:w-64 rounded shadow-lg mx-3 my-3 bg-purple-700" >

                    <div className=" flex justify-center content-center m-auto" >
                        <div className="justify-center my-5 mx-5" >
                            <img className="rounded-full  bg-pink-600 border-2" src={this.props.profile.picture.large} alt="Sunset in the mountains" >
                            </img>
                        </div >


                            <div className="flex" >
                                <div className="m-auto" >

                                    <div className="font-bold text-center text" >{this.props.profile.name.first} {this.props.profile.name.last} </div> <
                                        div className="font-light text-center pb-5 pt-1 mx-5" > {this.props.profile.email} </div>
                                </div >
                            </div>
                        </div >



                    </div>
                </div >

                )
    }
}