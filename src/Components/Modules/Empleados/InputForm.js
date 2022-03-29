const InputForm = (props) => {

    return (
        <div style={{ padding:'2px', marginTop:'2px'}}>
                <label style={{ display: 'block' }}>
                    {props.etiqueta}
                </label>

                <input style={{ backgroundColor: '#f2ebc2', border:'solid black 0.5px', height: '25px', width:'90%' }}
                    placeholder={props.placeholder}
                    type={props.tipo}
                />


        </div>
    )
}

export default InputForm