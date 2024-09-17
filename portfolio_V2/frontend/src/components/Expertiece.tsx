
type expertieceProps = {
    experienceOne: string,
    experienceTwo: string
  }

export default function Expertiece({experienceOne = "experience", experienceTwo = "experienceTwo"}: expertieceProps){
    return(
      <>
        <p>{experienceOne}</p>
        <p>{experienceTwo}</p>
      </>
    )
  }