import { ref, watch } from 'vue'

export interface IDataRow {
  id: string
  framework: string
  developer: string
  linkText: string
  url: string
}

const STORAGE_KEY = 'tableData'

const initializeData = (): IDataRow[] => {
  return [
    {
      id: crypto.randomUUID(),
      framework: 'Tailwind',
      developer: 'Tailwind Labs Inc',
      linkText: 'tailwindcss.com',
      url: 'https://tailwindcss.com/',
    },
    {
      id: crypto.randomUUID(),
      framework: 'Bulma',
      developer: 'Jeremy Thomas',
      linkText: 'bulma.io',
      url: 'https://bulma.io/',
    },
    {
      id: crypto.randomUUID(),
      framework: 'Bootstrap',
      developer: 'Bootstrap Core Team',
      linkText: 'getbootstrap.com',
      url: 'https://getbootstrap.com/',
    },
  ]
}

const getData = (): IDataRow[] => {
  const jsonData = localStorage.getItem(STORAGE_KEY)
  return jsonData ? JSON.parse(jsonData) : initializeData()
}

const tableData = ref<IDataRow[]>(getData())

export function tableDataHandler() {
  watch(
    tableData,
    (newValue: IDataRow[]) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue))
    },
    { deep: true },
  )

  const addRow = (newRowData: Omit<IDataRow, 'id'>) => {
    const newRow: IDataRow = {
      id: crypto.randomUUID(),
      ...newRowData,
    }
    tableData.value.push(newRow)
  }

  const deleteRow = (id: string, framework: string) => {
    const userConfirm = confirm(`Är du säker att du vill radera ramverket '${framework}' från tabellen?`)
    if (userConfirm) {
      tableData.value = tableData.value.filter((row) => row.id !== id)
    }
  }

  const resetTable = () => {
    const userConfirm = confirm(`Är du säker att du vill återställa hela tabellen?`)
    if (userConfirm) {
      tableData.value = initializeData()
    }
  }

  return { tableData, addRow, deleteRow, resetTable }
}
