import React, { useState } from 'react'
import styles from './Main_2.module.css';

type Props = {
  nextStage: (stage: number) => void
  setCurrentZodiac: (zodiac: string | null) => void
  setCurrentAge: (age: number) => void
  stage: number
}
interface ZodiacSign {
  name: string;
  startDate: Date;
  endDate: Date;
}

const zodiacSigns: ZodiacSign[] = [
  { name: "Aquarius", startDate: new Date(0, 0, 21), endDate: new Date(0, 1, 19) },
  { name: "Pisces", startDate: new Date(0, 1, 20), endDate: new Date(0, 2, 20) },
  { name: "Aries", startDate: new Date(0, 2, 21), endDate: new Date(0, 3, 20) },
  { name: "Taurus", startDate: new Date(0, 3, 21), endDate: new Date(0, 4, 21) },
  { name: "Gemini", startDate: new Date(0, 4, 22), endDate: new Date(0, 5, 21) },
  { name: "Cancer", startDate: new Date(0, 5, 22), endDate: new Date(0, 6, 22) },
  { name: "Leo", startDate: new Date(0, 6, 23), endDate: new Date(0, 7, 22) },
  { name: "Virgo", startDate: new Date(0, 7, 23), endDate: new Date(0, 8, 23) },
  { name: "Libra", startDate: new Date(0, 8, 24), endDate: new Date(0, 9, 23) },
  { name: "Scorpio", startDate: new Date(0, 9, 24), endDate: new Date(0, 10, 22) },
  { name: "Sagittarius", startDate: new Date(0, 10, 23), endDate: new Date(0, 11, 21) },
  { name: "Capricorn", startDate: new Date(0, 11, 22), endDate: new Date(0, 0, 20) },
]

const getZodiacSign = (date: Date): string | null => {
  const month = date.getMonth();
  const day = date.getDate();

  for (const sign of zodiacSigns) {
    if (
      (month === sign.startDate.getMonth() && day >= sign.startDate.getDate()) ||
      (month === sign.endDate.getMonth() && day <= sign.endDate.getDate())
    ) {
      return sign.name;
    }
  }
  return null;
}


const Stage_2: React.FC<Props>  = ({nextStage, stage, setCurrentZodiac, setCurrentAge}) => {


  const [birthdate, setBirthdate] = useState<Date | null>(null)

  const handleDateChange = () => {
    //const date = new Date(event.target.value);
    if (day !== null && month !== null && year !== null) {
      const dateOfBirth = new Date(year, month - 1, day);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date()

      const ageInMs = today.getTime() - dateOfBirth.getTime();
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);

      const currentZodiac = getZodiacSign(dateOfBirth)
      
      setCurrentZodiac(currentZodiac)
      setCurrentAge(Math.floor(ageInYears))

      console.log('currentZodiac', currentZodiac)
      console.log('Math.floor(ageInYears)', Math.floor(ageInYears))
    }
    nextStage(stage + 1)
  }






  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const day = parseInt(event.target.value, 10);
    setDay(day);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(event.target.value, 10);
    setMonth(month);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value, 10);
    setYear(year);
  };

  return (
    <main>
      <h1 className={styles.subheading}>Your profile</h1>
      <p className={styles.heading}>What time were you born?</p>
      <h5 className={styles.text}>We use NASA data to identify the exact position of the planets in the sky at the time of your birth.</h5>

      <div>
        <select id="day" onChange={handleDayChange}>
          <option value="">12</option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select id="month" onChange={handleMonthChange}>
          <option value="">6</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select id="year" onChange={handleYearChange}>
          <option value="">1993</option>
          {Array.from({ length: 123 }, (_, i) => 1900 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>






      <button onClick={handleDateChange}>Next</button>
    </main>
  )
}

export default Stage_2


