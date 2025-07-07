import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  const handleReturn = () => {
    navigate('/home');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <div className="bg-gray-100 rounded-lg shadow-md p-8 space-y-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800">How Did We Do?</h2>

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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 py-3 bg-black text-white uppercase tracking-wide hover:bg-gray-800 transition"
          >
            Submit
          </button>
          <button
            onClick={handleReturn}
            className="flex-1 py-3 border border-black text-black uppercase tracking-wide hover:bg-gray-100 transition"
          >
            Return to Shop
          </button>
        </div>
      </div>
    </div>
  )
}
