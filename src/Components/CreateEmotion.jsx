import React from 'react'

const CreateEmotion = () => {
    const styling = {
        fontSize: '6.5rem',
    }
    return (
        <section className="module pb-0">
            <div className="container p-0">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="font-alt m-0" style={styling}>
                            We are Creating Emotions
                        </h1>
                    </div>
                    <div className="col-sm-6">
                        <p className="font-alt mb-30 lead">
                            Sed cursus, velit eget sodales facilisis, dui sem feugiat ex, eget varius dolor magna a risus. Nunc suscipit turpis sodales, aliquet lorem eu, tristique diam. Integer libero eros, luctus sit amet massa vel, maximus mattis nulla.
                        </p>
                        <h5 className="">
                            <u>
                                <a href="">view projects</a>
                            </u>
                        </h5>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CreateEmotion