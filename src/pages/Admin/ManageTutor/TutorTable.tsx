import { Table, TableColumnsType, Tag } from 'antd';
import React from 'react';
import DeleteTutor from './DeleteTutor';
import EditTutor from './EditTutor'
import { FaStar } from 'react-icons/fa';

interface Education {
  degreeType?: string;
  majorName?: string;
  specialization?: string;
  verified?: boolean;
}

interface Tutor {
  id: number;
  fullName?: string;
  avatarUrl?: string;
  teachingPricePerHour: number;
  educations?: Education;
  subjects: string[],
  averageRating?: number;
  status: string;
  gender: boolean;
  dateOfBirth: string;
}

interface TutorTableProps {
  tutors: Tutor[];
  onReload: () => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  loading: boolean;
}
const formatPrice = (price: number) => {
  const safePrice = Number(price) || 0;
  return `${safePrice.toLocaleString()} đ`;
}

const TutorTable: React.FC<TutorTableProps> = ({ tutors, onReload, onPageChange, currentPage, pageSize, totalElements, loading }) => {


  const columns: TableColumnsType<Tutor> = [
    {
      title: 'No',
      render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: 'Tutor Name',
      dataIndex: 'fullName',
      width: 150,
      showSorterTooltip: { target: 'full-header' },
      sorter: (a, b) => (a.fullName?.length ?? 0) - (b.fullName?.length ?? 0),
      sortDirections: ['descend'],
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Price Per Hour',
      dataIndex: 'teachingPricePerHour',
      render: (_, record) => formatPrice(record.teachingPricePerHour),
      sorter: (a, b) => a.teachingPricePerHour - b.teachingPricePerHour,
    },
    {
      title: 'Rating',
      dataIndex: 'averageRating',
      sorter: (a, b) => (a.averageRating ?? 0) - (b.averageRating ?? 0),
      render: (_, record) => (
        <>
          {record.averageRating &&
            Array.from({ length: record.averageRating }).map((_, index) => (
              <FaStar key={index} style={{ color: '#ffc107' }} />
            ))}
        </>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (_, record) => (

        <Tag color={
          record.status === 'ACTIVE' ? 'green' :
            record.status === 'PROCESSING' ? 'orange' :
              record.status === 'BANNED' ? 'red' :
                record.status === 'UNVERIFIED' ? 'gray' : ''
        }>
          {record.status}
        </Tag>

      )
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_: any, record: Tutor) => (
        <>
          <EditTutor record={record} onReload={onReload} />
          <DeleteTutor record={record} onReload={onReload} />

        </>
      )
    }
  ];
  return (
    <div>
      <Table
        rowKey={'id'}
        columns={columns}
        dataSource={tutors}
        scroll={{ x: true }}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: onPageChange,
          showSizeChanger: false,
          total: totalElements,
        }}
        loading={loading}
      />
    </div>
  );
}

export default TutorTable;
