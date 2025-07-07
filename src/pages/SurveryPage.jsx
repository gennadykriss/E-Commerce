import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import runawayImg from '../assets/runaway.png'

export default function SurveyPage() {
  const navigate = useNavigate()

  const [satisfaction, setSatisfaction] = useState('')
  const [recommend, setRecommend] = useState('')
  const [designFeedback, setDesignFeedback] = useState('')

  const handleSubmit = () => {
    if (!satisfaction || !recommend) {
      alert("Please answer all required questions.");
      return;
    }

    alert("Thank you for your feedback!");
    navigate('/home');
  }

  return (
    <div className="flex min-h-screen flex-col justify-between">
      {/* Left image panel */}
      <div className="flex flex-1 bg-contain bg-center relative" style={{ backgroundImage: `url(${runawayImg})` }}>
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute left-20 bottom-70 text-white text-5xl font-serif">Brunelli Alta</h1>
      </div>

      {/* Right form panel */}
      <div className="flex-1 bg-white flex flex-col justify-center px-8 sm:px-16 py-8 relative">
        <div className="bg-gray-100 rounded-lg shadow-md p-8 space-y-8 w-full max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-800">How Did We Do?</h2>
      {/* Optionally add a footer here if you want it at the bottom */}
      {/* <Footer /> */}

          {/* Question 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              How satisfied are you with your experience?
            </label>
            <div className="space-y-2 text-sm text-gray-700">
              {['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied'].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="satisfaction"
                    value={option}
                    checked={satisfaction === option}
                    onChange={() => setSatisfaction(option)}
                    className="accent-black"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Would you recommend Brunelli Alta to a friend?
            </label>
            <div className="space-y-2 text-sm text-gray-700">
              {['Yes', 'Maybe', 'No'].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="recommend"
                    value={option}
                    checked={recommend === option}
                    onChange={() => setRecommend(option)}
                    className="accent-black"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Optional comment */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Any feedback on our design?
            </label>
            <textarea
              value={designFeedback}
              onChange={e => setDesignFeedback(e.target.value)}
              placeholder="Your thoughts..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-black/20 resize-none"
              rows={3}
            />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-black text-white uppercase tracking-wide hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
