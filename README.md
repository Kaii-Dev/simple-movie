using npm swiper lib

using swr lib to fetching data, caching data, error, load more

- Render props : Hiểu đơn giản thì render props là một phương pháp có mục đích tương tự với phương pháp sử dụng Higher Order Component, giúp chúng ta sử dụng lại logic trên nhiều component. Render Props được dùng để tạo nên thư viện vô cùng nổi tiếng trong hệ sinh thái React, đó là React-Router. dễ gây ra nested

- Custom Hook:

  - để đổi tên props của hook thì sử dụng dấu ":" ví dụ
    const {value: value2} = useValue()

- React Paginate
- code splitting để tách cái chunk sau khi build, nhằm làm nhẹ dự án: sử dụng lazy import, suspense- thằng này cần phải bao bọc cả cái compo nào cần nó lazy load và phải có props fallback trong tag suspense
