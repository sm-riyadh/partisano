import { JOURNAL, COA } from './index'

/*
 * JOURNAL
 */
const fetchJournal = payload => ({
  type: JOURNAL.FETCH._,
  payload,
})
const fetchJournalMore = payload => ({
  type: JOURNAL.FETCH.MORE,
  payload,
})
const saveJournal = payload => ({
  type: JOURNAL.REPLACE._,
  payload,
})
const saveJournalMore = payload => ({
  type: JOURNAL.ADD._,
  payload,
})

/*
 * COA
 */
const fetchCoaList = () => ({
  type: COA.FETCH.LIST,
})
const saveCoaList = payload => ({
  type: COA.REPLACE.LIST,
  payload,
})

export {
  // JOURNAL
  fetchJournal,
  fetchJournalMore,
  saveJournal,
  saveJournalMore,
  saveCoaList,
  // COA
  fetchCoaList,
}
