import FormInputs from "./FormInputs";
import useFormContext from "../Hooks/useFormContext"

const Form = () => {
    const { page, setData, setPage, data, title, canSubmit, disableNext, disablePrev, prevHide, nextHide, submitHide } = useFormContext();

    const handlePrev = () => setPage(prev => prev - 1)
    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))

      setData('')
      setPage(0)
   }

    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>
            <header className="form-header">
               <h2>{title[page]}</h2>

               <div className="button-container">
                  <button onClick={handlePrev} type="button" className={`button ${prevHide}`} disabled={disablePrev}>Prev</button>
                  <button onClick={handleNext} type="button" className={`button ${nextHide}`} disabled={disableNext}>Next</button>

                  <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>
               </div>
            </header>
            
            <FormInputs />
        </form>
    )

    return content
}
export default Form