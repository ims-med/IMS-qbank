const QUESTIONS = [
  {
    id: 1,
    system: "Respiratory",
    code: "IMS-RM-01",
    stem: "A 28-year-old male is admitted with an acute severe exacerbation of asthma. He is initially treated with 100% oxygen, salbutamol nebulizers, and hydrocortisone 100 mg IV. Despite treatment, his oxygen saturation is 89% and respiratory rate is 30 breaths/minute. What is the SINGLE most appropriate next step in management?",
    options: [
      "Prednisolone 40 mg orally",
      "Add ipratropium bromide 0.5 mg to nebulizers",
      "Intravenous salbutamol",
      "Intramuscular adrenaline",
      "Stop administration of oxygen"
    ],
    answer: 1,
    explanation: "In acute severe or life-threatening asthma not responding adequately to initial beta-2 agonist (salbutamol) and systemic steroids, the immediate next step according to NICE/BTS guidelines is adding nebulized ipratropium bromide (0.5 mg) every 4–6 hours. IV magnesium sulfate is considered if there is still poor response."
  },
  {
    id: 2,
    system: "Respiratory",
    code: "IMS-RM-02",
    stem: "A 66-year-old smoker presents with progressive dyspnea, dry cough, and clubbing of the fingers. Auscultation reveals fine bibasilar end-inspiratory crackles ('Velcro' crackles). High-resolution CT chest shows subpleural basal reticulation and honeycombing. Which medication slows disease progression in this condition?",
    options: [
      "Inhaled fluticasone",
      "Pirfenidone",
      "Long-term azithromycin",
      "Oral prednisolone monotherapy",
      "Methotrexate"
    ],
    answer: 1,
    explanation: "The clinical picture and HRCT honeycombing are classic for Idiopathic Pulmonary Fibrosis (IPF). Antifibrotic agents (Pirfenidone or Nintedanib) are the mainstay of therapy to slow FVC decline. Immunosuppressants/steroids are harmful in chronic IPF."
  },
  {
    id: 3,
    system: "Cardiology",
    code: "IMS-CV-01",
    stem: "A 58-year-old man develops sudden central crushing chest pain radiating to his left jaw. ECG shows 3 mm ST-segment elevation in leads II, III, and aVF. His blood pressure is 82/50 mmHg, heart rate is 54 bpm, and JVP is elevated with clear lung fields. Which drug must be AVOIDED in his acute management?",
    options: [
      "Aspirin 300 mg",
      "Glyceryl trinitrate (GTN)",
      "Ticagrelor 180 mg",
      "Intravenous normal saline bolus",
      "Unfractionated heparin"
    ],
    answer: 1,
    explanation: "Inferior STEMI (II, III, aVF) complicated by hypotension, elevated JVP, and clear lungs indicates Right Ventricular Infarction. Right ventricular preload is critical; nitrates (GTN) cause venodilation, severely dropping preload and causing profound circulatory collapse."
  }
];
