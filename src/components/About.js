// import React, {useState} from 'react'

export default function About(props) {
    const myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#04272d':'white'
    }
    const myStyle2 = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#042751':'white'
    }
    

  return (
    <div className="container my-3" style={myStyle2} >
      <div className="accordion" id="accordionExample">
        <h1>About us</h1>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi molestiae iure deserunt iste quo quibusdam et ratione libero! Doloribus debitis incidunt voluptates dolorem distinctio, ratione at voluptate ducimus corporis quis, rerum cupiditate. Omnis exercitationem illum eos animi excepturi ducimus sapiente assumenda facere ipsam, repellat odit sequi tempore molestias illo reprehenderit quae atque eligendi cumque impedit, ex provident? Velit, eius sit suscipit et aliquid quo culpa rerum modi laudantium?
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nemo cumque officiis suscipit provident vel ab. Ad enim quibusdam, fuga, neque error voluptatum eveniet soluta, iste iusto at voluptas nesciunt. Doloremque, nemo natus sequi nesciunt earum est aperiam impedit repellendus eveniet, minima, reprehenderit enim maxime ea mollitia et quod odit adipisci accusantium maiores dolor sunt distinctio debitis dolores ad. Repudiandae, incidunt odio quis libero totam itaque quam quisquam? Deleniti?
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repellendus nulla inventore ad ut eos laborum, neque tenetur, consequuntur dignissimos quisquam explicabo corporis architecto quia mollitia labore aut! Ipsam quibusdam maiores molestiae porro alias asperiores repudiandae, laborum animi aliquam sed nostrum beatae temporibus aperiam quaerat culpa, veritatis eveniet nam officiis qui praesentium vitae officia voluptatibus? Unde ullam eligendi reprehenderit nisi tempora mollitia quasi velit, amet nostrum labore provident rem?
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
