import React, { FC, ReactNode } from 'react'
import { Pagination as PaginationType } from '@totentech/api-client'
import Pagination from './Pagination'

interface PaginatedListProps {
  pagination: PaginationType
  setPage: (next: number | ((previous: number) => number)) => void
  children?: ReactNode
}

const PaginatedList: FC<PaginatedListProps> = ({ pagination, setPage, children }: PaginatedListProps) => {
  const { totalPages, currentPage } = pagination || {}

  const PaginationComponent: FC = () => (
    <>{totalPages > 1 && <Pagination total={totalPages} current={currentPage} setCurrent={setPage} />}</>
  )

  return (
    <>
      <PaginationComponent />
      {children}
      <PaginationComponent />
    </>
  )
}

export default PaginatedList
