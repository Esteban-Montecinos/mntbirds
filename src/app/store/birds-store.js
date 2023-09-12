const { create } = require("zustand")

export const useBirdsStore = create((set) => ({
    birds: [],
    setBirds: (birds) => set({ birds }),
})
  )