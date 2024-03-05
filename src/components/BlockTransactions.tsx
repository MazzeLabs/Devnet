type BlockTransactionsProps = {
    item: any
}

export const BlockTransactions = ({ item } : BlockTransactionsProps) => {
    console.log(item);

    return (
        <div>
            Hello Transactions
        </div>
    )
}